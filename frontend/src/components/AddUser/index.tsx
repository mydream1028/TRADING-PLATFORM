import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { IAddUser } from "../../types";

interface IAddUserProps {
  onSubmit: (value: IAddUser, actions: FormikHelpers<IAddUser>) => void;
}

export const AddUserComponent: React.FC<IAddUserProps> = ({onSubmit}) => {
  const AddUserSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    token: Yup.number()
      .typeError("Token must be a number type")
      .moreThan(0, "Amount of token should be bigger than 0!")
      .required("Token is required"),
  });
  const errorStyle = "text-xs mb-10";
  return (
    <div className=" bg-white h-full rounded-lg px-10 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Add User</h1>
      <Formik
        initialValues={{
          name: "",
          token: 100,
        }}
        validationSchema={AddUserSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="m-auto w-96">
            <label>
              Name <span className="text-red-500">*</span>
            </label>
            <Field
              name="name"
              placeholder="Enter the name"
              className={`w-full border rounded-lg px-5 py-2 ${
                errors.name && touched.name
                  ? "outline-red-500"
                  : "outline-blue-500"
              }`}
            />
            {errors.name && touched.name ? (
              <div className={`${errorStyle} text-red-500`}>{errors.name}</div>
            ) : <div className={`${errorStyle} text-white`}>No error</div>}
            <label>
              Token(tocos) <span className="text-red-500">*</span>
            </label>
            <Field
              name="token"
              placeholder="Enter the token"
              className={`w-full border rounded-lg px-5 py-2 ${
                errors.token && touched.token
                  ? "outline-red-500"
                  : "outline-blue-500"
              }`}
            />
            {errors.token && touched.token ? (
              <div className={`${errorStyle} text-red-500`}>{errors.token}</div>
            ) : <div className={`${errorStyle} text-white`}>No error</div>}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-5 py-2 w-full"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
