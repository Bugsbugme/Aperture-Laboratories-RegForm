//WebForm Validation Program for Aperture Laboratories Website Registration Form
//Written by Gracie Bryan_160002179
//
//This JavaScript program validates the data entered into the registration form by the user.
//------------------------------------------------------------------------------------------------------------------------

function regFormValidation()
{
    //--------------------------------------------------------------------------------------------------------------------
    //NAME - The following statements deal with the Name section of the form.
    //--------------------------------------------------------------------------------------------------------------------
    //This statment checks First Name against a regex string to determine if it is valid.
    //If it is not, an error message is shown.
    var firstName = document.regForm.firstName.value;

    if (!/^([A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ']{0,20})(([ -]?[A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ']{0,20}){0,10})$/.test(firstName))
    {
        alert("Please enter a valid First Name");
        document.regForm.firstName.focus();
        return false;
    }

    //This statment checks Last Name against a regex string to determine if it is valid.
    //If it is not, an error message is shown.
    var lastName = document.regForm.lastName.value;

    if (!/^([A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ']{0,20})(([ -]?[A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ']{0,20}){0,10})$/.test(lastName))
    {
        alert("Please enter a valid Last Name");
        document.regForm.lastName.focus();
        return false;
    }

    //This statment checks Company Name (if provided) against a regex string to determine if it is valid.
    //If it is not, an error message is shown.
    var adrsCom = document.regForm.adrsCom.value;

    if (!/^(([A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ']{0,20})(([ -]?[A-ZΆ-ΫÀ-ÖØ-Þ][A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ']{0,20}){0,10}))?$/.test(adrsCom))
    {
        alert("Please enter a valid Company Name");
        document.regForm.adrsCom.focus();
        return false;
    }

    //--------------------------------------------------------------------------------------------------------------------
    //CONTACT DETAILS - The following stemants deal with the Contact Details section of the form.
    //--------------------------------------------------------------------------------------------------------------------
    //This statment checks Address Line 1 against a regex string to determine if it is valid.
    //If it is not, an error message will be shown.
    var adrsLine1 = document.regForm.adrsLine1.value;

    if (!adrsLine1.match(/^([0-9A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ '/#,-]){6,250}$/))
    {
        alert("Please enter a valid Street Address. Correct format is 123 Street Name St");
        document.regForm.adrsLine1.focus();
        return false;
    }

    //This statment checks Address Line 2 (if provided) against a regex string to determine if it is valid.
    //If it is not, an error message will be shown.
    var adrsLine2 = document.regForm.adrsLine2.value;

    if (!adrsLine2.match(/^([0-9A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ '/#,-]){0,250}$/))
    {
        alert("Invalid Address Details");
        document.regForm.adrsLine2.focus();
        return false;
    }

    //This statment checks Suburb (if provided) against a regex string to determine if it is valid.
    //If it is not, an error message will be shown.
    var adrsSuburb = document.regForm.adrsSuburb.value;

    if (!adrsSuburb.match(/^(([A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ -]){2,254})?$/))
    {
        alert("Please enter a valid Suburb Name");
        document.regForm.adrsSuburb.focus();
        return false;
    }

    //This statment checks City against a regex string to determine if it is valid.
    //If it is not, an error message will be shown.
    var adrsCity = document.regForm.adrsCity.value;

    if (!adrsCity.match(/^([A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ -]){2,254}$/))
    {
        alert("Please enter a valid City Name");
        document.regForm.adrsCity.focus();
        return false;
    }

    //This statment checks State/Region (if provided) against a regex string to determine if it is valid.
    //If it is not, an error message will be shown.
    var adrsRegion = document.regForm.adrsRegion.value;

    if (!adrsRegion.match(/^(([A-ZΆ-ΫÀ-ÖØ-Þa-zά-ώß-öø-ÿ -]){2,254})?$/))
    {
        alert("Please enter a valid State or Region");
        document.regForm.adrsRegion.focus();
        return false;
    }

    //This statment checks Postal Code against a regex string to determine if it is valid.
    //If it is not, an error message will be shown.
    var adrsPC = document.regForm.adrsPC.value;

    if (!adrsPC.match(/^[0-9]{4}$/))
    {
        alert("Please enter a valid Postal Code. It should be 4 numbers long.");
        document.regForm.adrsPC.focus();
        return false;
    }

    //This statment checks Phone Number 1 against a regex string to determine if the phone number is valid.
    //If it is not, an error message will be shown.
    var phoneNo1 = document.regForm.phoneNo1.value;

    if (!/^((\+[0-9]{2} ?[0-9]{2})|(0[1-9]{2})|(0[1-9]{1}))( ?)([0-9]{3,4})( ?)([0-9]{3,4})$/.test(phoneNo1))
    {
        alert("Please enter a valid Phone Number.");
        document.regForm.phoneNo1.focus();
        return false;
    }

    //This statment checks Phone Number 2 (if provided) against a regex string to determine if the phone number is valid.
    //If it is not, an error message will be shown.
    var phoneNo2 = document.regForm.phoneNo2.value;

    if (!/^(((\+[0-9]{2} ?[0-9]{2})|(0[1-9]{2})|(0[1-9]{1}))( ?)([0-9]{3,4})( ?)([0-9]{3,4}))?$/.test(phoneNo2))
    {
        alert("Please enter a valid Phone Number.");
        document.regForm.phonNo2.focus();
        return false;
    }

    //This statment checks Email Address against a regex string to determine if it is valid.
    //If it is not, an error message will be shown.
    var email = document.regForm.email.value;

    if (!/(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}/.test(email))
    {
        alert("Please enter a valid Email Address");
        document.regForm.email.focus();
        return false;
    }

    //--------------------------------------------------------------------------------------------------------------------
    //DOB - The following statements deal witht the Date of Birth section of the form.
    //--------------------------------------------------------------------------------------------------------------------
    //This statement checks whether the Date of Birth field is invalid.
    //If it is, an error message will be shown.
    var dob = document.regForm.dob.value;
    console.log(dob);
    if ((!dob.match(/^(\d{4})([-/]{1})(\d{2})([-/]{1})(\d{2})$/)) && (!dob.match(/^(\d{2})([-/]{1})(\d{2})([-/]{1})(\d{4})$/)))
    {
        alert("Please enter your Date of Birth like the example shown.");
        document.regForm.dob.focus();
        return false;
    }

    //This statement will calculate the users age from the birthdate they provide in the form.
    //If the users birthday has not yet occured in the current year,
    //the program will think they are older than they actually are,
    //so the statement will deduct 1 year from the caclculated age in this case.
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var ageAlt = today.getMonth() - birthDate.getMonth();
    if (ageAlt < 0 || (ageAlt === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }

    //Here, the function decides if the user is old enough to create the account.
    //If the age calculated earlier is less than 21, the program will show an error message.
    if (age < 21)
    {
        alert("You must be 21 or older to create an account");
        document.regForm.dob.focus();
        return false;
    }

    //--------------------------------------------------------------------------------------------------------------------
    //ACCOUNT NAME & PASSWORD - The following statements deal with the Account Name & Password section of the form.
    //--------------------------------------------------------------------------------------------------------------------
    //This statement checks whether the Account Name field has been left empty or the input is invalid.
    //If either is the case, an error is shown.
    var acntName = document.regForm.acntName.value;

    if (!acntName.match(/^([0-9A-Za-z]{5,50})$/))
    {
        alert("Please specify a valid Account Name.");
        document.regForm.acntName.focus();
        return false;
    }

    //This statement checks whether the user has chosen an account type.
    //If they have not chosen one of the radio inputs, the program will show an error message.
    var personal = document.getElementById('acntType1');
    var company = document.getElementById('acntType2');

    if (!(personal.checked || company.checked))
    {
        alert("Please specify Account Type.");
        document.regForm.acntType1.focus();
        return false;
    }

    //This statement checks whether the Password field has been left empty or the input is valid.
    //If either is the case, an error is shown.
    var acntPswd = document.regForm.acntPswd.value;

    if (!acntPswd.match(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}/))
    {
        alert("Please specify a valid Password.");
        document.regForm.acntPswd.focus();
        return false;
    }

    //This statement checks the Password against the Account Name to see if they match.
    //If they do, an error message is shown.
    if (acntPswd == acntName)
    {
        alert("Your Password should not be the same as your Account Name");
        document.regForm.acntPswd.focus;
        return false;
    }

    //This statement checks the input in the Password Verfication field against the Password to see if they match.
    //If they do not, an error message is shown.
    var confPswd = document.regForm.confPswd.value;

    if (confPswd != acntPswd)
    {
        alert("Passwords do no match, please try again.");
        document.regForm.confPswd.focus;
        return false;
    }

    //This statement checks whether the Terms and Conditions checkbox has been checked.
    //If it has not, an error message is shown.
    var trmsCond = document.getElementById('trmsCond');

    if (!trmsCond.checked)
    {
        alert("You must accept the Terms and Conditions in order to continue.");
        document.regForm.trmsCond.focus();
        return false;
    }

    //This statement checks whether the Privacy Policy checkbox has been checked.
    //If it has not, an error message is shown.
    var prvyPol = document.getElementById('prvyPol');

    if (!prvyPol.checked)
    {
        alert("You must accept the Privacy Policy in order to continue.");
        document.regForm.prvyPol.focus();
        return false;
    }

    return true;
}
