const fs = require("fs");
// Function to read CSV file
const read_csv_file_logic = (file_path) => {
  try {
    // Read CSV file synchronously
    const file_content = fs.readFileSync(file_path, "utf-8");
    // Split content into rows
    const rows = file_content.split("\n").filter(Boolean);
    // Get headers from the first row, excluding empty strings
    const headers = rows[0]
      .split(",")
      .map((header) => header.trim())
      .filter(Boolean);

    let data = rows
      .filter((row) => row.trim() !== ",,,,,,")
      .slice(1, rows.length) // Ignore rows with only commas
      .map((row) => {
        const columns = row.split(",").map((column) => column.trim());
        const row_object = {};
        headers.forEach((header, index) => {
          row_object[header] = columns[index];
        });
        return row_object;
      });
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = read_csv_file_logic;
