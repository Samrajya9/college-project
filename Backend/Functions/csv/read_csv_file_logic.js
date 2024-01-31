const { log } = require("console");
const fs = require("fs");
// Function to read CSV file
const read_csv_file_logic = (file_path) => {
  try {
    // Read CSV file synchronously
    const file_content = fs.readFileSync(file_path, "utf-8");
    console.log(`\nfile_content= ${file_content}\n`);

    // Split content into rows
    const rows = file_content.split("\n").filter(Boolean);
    console.log(`\n rows`);
    console.log(rows);

    // Get headers from the first row, excluding empty strings
    const headers = rows[0]
      .split(",")
      .map((header) => header.trim())
      .filter(Boolean);
    console.log(`\n headers`);
    console.log(headers);

    const dbHeaders = ['drug_name',
    'batch_no',
    'mfg_date',
    'exp_date',
    'quantity',
    'price']

    let data = rows
      .filter((row) => row.trim() !== ",,,,,,")
      .slice(1, rows.length) // Ignore rows with only commas
      .map((row) => {
        const columns = row.split(",").map((column) => column.trim());
        console.log(`\n columns`);
        console.log(columns);
        const row_object = {};
        headers.forEach((header, index) => {
          row_object[header] = columns[index];
        });
        return row_object;
      });
      console.log(`\ndata`);
    console.log(data);
    return data;

  } catch (error) {
    throw error;
  }
};

module.exports = read_csv_file_logic;
