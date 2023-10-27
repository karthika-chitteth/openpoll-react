import * as Yup from "yup";

export const PollSchema = Yup.object().shape({
  selectedOption: Yup.number().required("Please select an option"),
});
