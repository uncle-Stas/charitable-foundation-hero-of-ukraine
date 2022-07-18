function googleTranslateElementInit2() {
  new google.translate.TranslateElement(
    {
      includedLanguages: 'uk,en,lt',
    },
    'google_translate_element2'
  );
  var a = document.querySelector('#google_translate_element select');
  // console.log(a);

  if (a) {
    a.selectedIndex = 1;
    a.dispatchEvent(new Event('change'));
  }
}
