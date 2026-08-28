import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, Head, useForm } from "@inertiajs/react";
import { Label } from "@/components/ui/label";
import { store, create } from "@/routes/products";
import React from "react";
import InputError from "@/components/input-error";
import { Spinner } from "@/components/ui/spinner";

export default function Create() {
  return (
    <>
      <Head title="Create a New Product" />

      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <Form
          action={store.url()}
          method="post"
          className="flex w-full flex-col gap-4 lg:w-8/12"
        >
          {({ processing, errors }) => (
            <>
              <div className="grid gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Product Name"
                  name="name"
                  autoFocus
                />
                <InputError
                  message={errors.name}
                  className="mt-2"
                />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  placeholder="Price"
                  name="price"
                  type="number"
                  step={0.01}
                  min={0}
                />
                <InputError
                  message={errors.price}
                  className="mt-2"
                />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={6}
                  placeholder="Description"
                  name="description"
                />
                <InputError
                  message={errors.description}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="mt-2 w-fit"
                tabIndex={5}
                data-test="register-user-button"
              >
                {processing && <Spinner />}
                Add Product
              </Button>
            </>)}
        </Form>

      </div>
    </>
  );
}

Create.layout = {
  breadcrumbs: [
    {
      title: "Create a New Product",
      href: create(),
    },
  ],
};