import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ImagePlus, ChevronDownIcon, ArrowRight } from "lucide-react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { DateAndTimePicker } from "@/component/DateAndTime/DateAndTimePicker";
import { uploadData } from "@/appwrite/Database/database";
import { uploadimage } from "@/appwrite/Storage/storage";

export default function CreatePost() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const methods = useForm();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;
  // const { register, handleSubmit } = methods;
  // const { register, handleSubmit, control } = useForm();
  const [image, setImage] = useState(null);
  // const [caption, setCaption] = useState("");
  // const InputFields = [
  //   {
  //     name: "pair",
  //     placeholder: "Enter Pair (e.g., EUR/USD)",
  //   },
  // ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // preview image
    }
  };

  const onsubmit = async (data) => {
    // console.log("submit");
    // console.log(data);

    const response = await uploadData(data);
    const responseImage = await uploadimage(data.image);
    console.log(data);
    reset({
      pair: "",
      notes: "",
      image: "",
    });
    setImage(null);
  };

  return (
    <Card className="mx-auto h-full max-w-full space-y-4 overflow-y-auto pb-20 md:pb-0">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Create a Post</h2>
        <Button
          type="submit"
          className="w-20 rounded-full md:hidden"
          onClick={handleSubmit(onsubmit)}
        >
          <ArrowRight />
        </Button>
      </CardHeader>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onsubmit)}>
          <CardContent className="space-y-4">
            {/* Caption */}
            {
              // InputFields.map((field) => (
              <div className="space-y-2" key="Pair">
                <Label htmlFor="Pair">Pair</Label>
                <Controller
                  control={control}
                  name={"pair"}
                  defaultValue={""}
                  rules={{
                    required: "This field is required",
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Input
                      // id={"Pair"}
                      placeholder={"Enter Pair (e.g., EUR/USD)"}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      // ref={ref}
                    />
                  )}
                />
                {errors.pair && (
                  <p className="text-sm text-red-500">{errors.pair.message}</p>
                )}
              </div>
              // ))
            }
            {/* Date & Time */}
            <DateAndTimePicker />
            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Controller
                control={control}
                name="notes"
                rules={{
                  required: "This field is required",
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Textarea
                    id="notes"
                    placeholder="Descreption"
                    className={"h-42 w-full"}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    // {...register("notes", { required: false })}
                  />
                )}
              />
              {errors.notes && (
                <p className="text-sm text-red-500">{errors.notes.message}</p>
              )}
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image">Add Image</Label>
              <div className="flex items-center gap-3">
                <Controller
                  control={control}
                  name="image"
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        onChange(e.target.files[0]);
                        handleImageChange(e);
                      }}
                      className="cursor-pointer"
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => document.getElementById("image").click()}
                >
                  <ImagePlus className="h-5 w-5" />
                </Button>
              </div>
              {errors.image && (
                <p className="text-sm text-red-500">
                  {"This field is required"}
                </p>
              )}

              {/* Image Preview */}
              {image && (
                <div className="mt-2">
                  <img
                    src={image}
                    alt="preview"
                    className="h-48 w-full rounded-lg border object-contain"
                  />
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="mt-5 mb-10 hidden justify-end md:flex">
            <Button type="submit" className="w-full cursor-pointer">
              Post
            </Button>
          </CardFooter>
        </form>
      </FormProvider>
    </Card>
  );
}
