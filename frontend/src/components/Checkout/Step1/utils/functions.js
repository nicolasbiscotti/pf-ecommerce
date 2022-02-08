export const placeholderFm = (
  ref,
  fullname,
  addressref,
  addressCref,
  cityref,
  countryref,
  postalcoderef,
  emailref
) => {
  ref.current.name === "Full name"
    ? (fullname.current.placeholder = "")
    : (fullname.current.placeholder = "Full name");
  ref.current.name === "Address"
    ? (addressref.current.placeholder = "")
    : (addressref.current.placeholder = "Address");
  ref.current.name === "Address continue"
    ? (addressCref.current.placeholder = "")
    : (addressCref.current.placeholder = "Address continue (optional)");
  ref.current.name === "City"
    ? (cityref.current.placeholder = "")
    : (cityref.current.placeholder = "City");
  ref.current.name === "Country"
    ? (countryref.current.placeholder = "")
    : (countryref.current.placeholder = "Country");
  ref.current.name === "Postal code"
    ? (postalcoderef.current.placeholder = "")
    : (postalcoderef.current.placeholder = "Postal code");
  ref.current.name === "Email"
    ? (emailref.current.placeholder = "")
    : (emailref.current.placeholder = "Email");
};

export const handleChangeFm = (ref, setFormData, formData) => {
  let value = ref.current.value;
  let name = ref.current.name.toLowerCase().replace(" ", "");
  setFormData({ ...formData, [name]: value });
};

export const handleSubmitFm = (formData, setStep) => {
  let validate = false;
  for (let prop in formData) {
    if (prop === "email") {
      //eslint-disable-next-line
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData[prop])
        ? (validate = true)
        : (validate = false);
    } else if (prop === "addresscontinue") {
      continue;
    } else if (formData[prop].length > 0) validate = true;
    if (!validate) break;
  }
  validate ? setStep(2) : alert("Invalid data");
};
