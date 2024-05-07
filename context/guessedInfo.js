"use client";
import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const GuessedInfoContext = createContext({
  showSpinner: false,
  setShowSpinner: undefined,
  name: "Urvashi",
  setName: undefined,
  age: 24,
  setAge: undefined,
  gender: "Female",
  setGender: undefined,
  nationality: "IN",
  setNationality: undefined,
});

const GuessedInfoProvider = ({
  name: nameParam,
  age: ageParam,
  gender: genderParam,
  nationality: nationalityParam,
  showSpinner: showLoader,
  children,
}) => {
  const [name, setName] = useState(nameParam);
  const [age, setAge] = useState(ageParam);
  const [gender, setGender] = useState(genderParam);
  const [nationality, setNationality] = useState(nationalityParam);
  const [showSpinner, setShowSpinner] = useState(showLoader);

  return (
    <GuessedInfoContext.Provider
      value={{
        name,
        setName,
        age,
        setAge,
        gender,
        setGender,
        nationality,
        setNationality,
        showSpinner,
        setShowSpinner,
      }}
    >
      {children}
    </GuessedInfoContext.Provider>
  );
};

const useGuessedInfo = () => {
  return useContext(GuessedInfoContext);
};

GuessedInfoProvider.defaultProps = {
  showSpinner: false,
  name: "Urvashi",
  age: 24,
  gender: "Female",
  nationality: "IN",
};

GuessedInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  age: PropTypes.number,
  name: PropTypes.string,
  gender: PropTypes.string,
  nationality: PropTypes.string,
  showSpinner: PropTypes.bool,
};
GuessedInfoProvider.displayName = "GuessedInfoProvider";

export { GuessedInfoProvider, useGuessedInfo };
