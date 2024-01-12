import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { IAddTransaction, IUser } from "../../types";

interface IAddTransactionProps {
  users: IUser[];
  onSubmit: (values: IAddTransaction, actions:FormikHelpers<IAddTransaction>) => void;
}

export const AddTransactionComponent: React.FC<IAddTransactionProps> = ({
  users,
  onSubmit,
}) => {
  const errorStyle = "text-xs mb-10";

  const AddTransactionSchema = Yup.object().shape({
    sender: Yup.string().required("Sender is required."),
    receiver: Yup.string()
      .required("Receiver is required.")
      .notOneOf([Yup.ref("sender")], "Sender and receiver cannot be the same"),
    amount: Yup.number()
      .typeError("Token must be a number type")
      .moreThan(0, "Amount of token should be bigger than 0!")
      .required("Token is required"),
  });
  return (
    <div className=" bg-white h-full rounded-lg px-10 py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Add Transaction</h1>
      <Formik
        initialValues={{
          sender: "",
          receiver: "",
          amount: 0,
        }}
        validationSchema={AddTransactionSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="m-auto w-96">
            <label>
              Sender <span className="text-red-500">*</span>
            </label>
            <Field
              as="select"
              id="sender"
              name="sender"
              className="w-full px-5 py-2 border rounded-lg"
            >
              <option key={-1} value={""}>
                Select Sender
              </option>
              {users.map((option, index) => (
                <option key={index} value={option._id}>
                  {option.name}
                </option>
              ))}
            </Field>
            {errors.sender && touched.sender ? (
              <div className={`${errorStyle} text-red-500`}>
                {errors.sender}
              </div>
            ) : (
              <div className={`${errorStyle} text-white`}>No error</div>
            )}
            <label>
              Receiver <span className="text-red-500">*</span>
            </label>
            <Field
              as="select"
              id="receiver"
              name="receiver"
              className="w-full px-5 py-2 border rounded-lg"
            >
              <option key={-1} value={""}>
                Select Receiver
              </option>
              {users.map((option, index) => (
                <option key={index} value={option._id}>
                  {option.name}
                </option>
              ))}
            </Field>
            {errors.receiver && touched.receiver ? (
              <div className={`${errorStyle} text-red-500`}>
                {errors.receiver}
              </div>
            ) : (
              <div className={`${errorStyle} text-white`}>No error</div>
            )}
            <label>
              Amount to Send <span className="text-red-500">*</span>
            </label>
            <Field
              name="amount"
              placeholder="Enter the token"
              className={`w-full border rounded-lg px-5 py-2 ${
                errors.amount && touched.amount
                  ? "outline-red-500"
                  : "outline-blue-500"
              }`}
            />
            {errors.amount && touched.amount ? (
              <div className={`${errorStyle} text-red-500`}>
                {errors.amount}
              </div>
            ) : (
              <div className={`${errorStyle} text-white`}>No error</div>
            )}
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
