/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "../action/userInfo";
import ActionSubmitButton from "../components/shared/submitButton/ActionSubmitButton";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";

export default function LoginFrom() {
  const router = useRouter();
  // const ref = createRef<HTMLFormElement>();
  // const [state, fromAction] = useFormState(loginUser, null);
  // useEffect(() => {
  //   if (state && state?.success) {
  //     toast.success(state?.message);
  //     ref.current?.reset();
  //     router.push("/");
  //   }
  //   if (state && !state?.success) {
  //     toast.error(state?.message);
  //   }
  // }, [state, ref]);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <form>
        {/* <Input name="email" type="email" label="Email" variant="bordered" /> */}
        {/* <Input
          className="mt-3"
          name="password"
          type="password"
          label="Password"
          variant="bordered"
        /> */}
        <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        <Input
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs mt-3"
        />
        <div className="flex justify-end text-primary">
          <Link href="/register">if you dont have account sign Up</Link>
        </div>
        <div className="flex justify-end ">
          <ActionSubmitButton>login</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
}
