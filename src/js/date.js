const picker = datepicker('#js-datepicker', {
  language: 'ua',
  formatter: (input, date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedMonth = month < 10 ? `0${month}` : month;
    input.value = `${day}/${formattedMonth}/${year}`;
  },
  onSelect: (instance, date) => {
    instance.setDate(date); 
  }
});

picker.setDate(new Date());