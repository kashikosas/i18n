const getTranslationData = (filePath) => {
  const translationData = require(filePath);
  return translationData;
};

const checkMissing = (translations, checkingFileName) => {
  let totalData = {};

  translations.forEach((translation) => {
    const translationData = getTranslationData(
      `${translation}/${checkingFileName}`
    );
    totalData = { ...totalData, ...translationData };
  });

  const totalKeys = Object.keys(totalData);

  translations.forEach((translation) => {
    const translationData = getTranslationData(
      `${translation}/${checkingFileName}`
    );
    const translationKeys = Object.keys(translationData);
    const missingKeys = totalKeys.filter(
      (key) => !translationKeys.includes(key)
    );
    console.log(`${translation}:`, missingKeys.join(", "));
  });
};

checkMissing(["./dc/en", "./dc/fr", "./dc/de"], "common.json");
