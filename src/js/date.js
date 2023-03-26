const picker = datepicker('#js-datepicker', {
  language: 'ua',
  formatter: (input, date) => {
    input.value = date.toLocaleDateString()
  },
  onSelect: (instance, date) => {
    instance.setDate(date); 
  }
});

picker.setDate(new Date());