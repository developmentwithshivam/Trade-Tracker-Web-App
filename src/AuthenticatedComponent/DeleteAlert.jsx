import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2Icon, TrashIcon } from "lucide-react";
import React, { useState } from "react";
import { deletePost } from "@/appwrite/Database/database";
import { deleteImage } from "@/appwrite/Storage/storage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "@/component/loading/Loadingspinner";

export function DeleteAlert({ items }) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (postid) => {
      await deleteImage(postid);
      await deletePost(postid);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllPostData"] });
      queryClient.invalidateQueries({ queryKey: ["getAllPostImage"] });
      setOpen(false);
    },
  });

  let { $id: postid } = items;
  let handledelete = async () => {
    await mutation.mutateAsync(postid);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button className="text-destructive w-full text-left">
          <div className="flex">
            <TrashIcon />
            Delete
          </div>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this chat conversation. View{" "}
            <a href="#">Settings</a> delete any memories saved during this chat.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={mutation.isPending}
            onClick={handledelete}
          >
            {mutation.isPending ? (
              <LoadingSpinner
                divheight={"h-full"}
                thickness={"border-4"}
                size={"h-4 w-4"}
                colour={"border-white"}
              />
            ) : (
              "Delete"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
