import { Card, CardBody, CardHeader } from "@nextui-org/react";
import SignUpForm from "./signUpFrom";

const registerPage = () => {
  return (
    <div className="mt-24 flex justify-center items-center">
      <Card className="w-96 ">
        <CardHeader className="flex justify-center">
          <div className="flex">
            <p className="font-bold text-inherit px-4">Sign up</p>
          </div>
        </CardHeader>
        <CardBody>
          <SignUpForm></SignUpForm>
        </CardBody>
      </Card>
    </div>
  );
};

export default registerPage;
