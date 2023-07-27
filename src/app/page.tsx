import { Formik, Form, FormikHelpers, Field } from "formik";
import Image from "next/image";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  return (
    <main className="flex h-screen w-screen">
      <div className="h-full w-2/5 flex justify-center items-center">
        <div className="relative h-full w-full">
          <Image
            className="object-cover"
            src="https://source.unsplash.com/random"
            fill
            alt="relevant image"
          />
        </div>
      </div>
      <div className="h-full w-3/5 flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-5xl">Login</h1>
          {/* <form action="" className="flex flex-col">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" />
          </form> */}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(
              values: LoginForm,
              { setSubmitting }: FormikHelpers<LoginForm>,
            ) => {}}
          >
            <Form>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" placeholder="Enter your email" />
              <label htmlFor="password">Password</label>
              <Field name="password" placeholder="Enter your password" />
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}
