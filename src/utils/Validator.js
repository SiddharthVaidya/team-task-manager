class Validator {
  static validateLoginRequest(body) {
    if (body == null) {
      return { status: false, message: "Bad Request" };
    }
    if (
      body.email == null ||
      body.password == null ||
      !Validator.validateEmail(body.email)
    ) {
      return { status: false, message: "Bad Request" };
    }
    return { status: true };
  }

  static validateSignUp(body) {
    if (body == null) {
      console.log("this one");
      return { status: false, message: "Bad Request" };
    }
    if (
      body.email == null ||
      body.password == null ||
      body.name == null ||
      body.designation == null ||
      body.contact_number == null ||
      !Validator.validateEmail(body.email)
    ) {
      console.log("this 2");
      return { status: false, message: "Bad Request" };
    }
    return { status: true };
  }

  static ValidateTaskRequest(body) {
    if (
      !body ||
      !body.title ||
      !body.description ||
      !body.deadline ||
      !body.createdBy ||
      !body.assignedTo ||
      !body.team
    ) {
      return false;
    }
    body.deadline = Date.parse(body.deadline);
    return true;
  }
  static validateEmail = (email) => {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    console.log(regex.test(email));
    return regex.test(email);
  };
}

module.exports = Validator;