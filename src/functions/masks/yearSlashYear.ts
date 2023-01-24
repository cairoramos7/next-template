const yearSlashYear = (raw: string): string => {
  return raw.replace(/\D/g, '').replace(/(\d{4})(\d)/, '$1/$2');
};

export default yearSlashYear;
