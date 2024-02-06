const connection = require("../../../Models/connection");

const udpate_user_logic = (id, data) => {
    return new Promise((resolve, reject) => {
        let { email,roles} =
          data;
        const setValues = [];
        // Build the SET clause dynamically based on the provided data
        if (email) setValues.push(`email='${email}'`);
        if (roles) setValues.push(`roles='${roles}'`);

        // Ensure there are fields to update
        if (setValues.length === 0) {
          reject(new Error("No fields to update.", 400));
          return;
        }
        console.log(setValues);
        const update_query = `UPDATE users SET ${setValues.join(
          ","
        )} WHERE id=${id}`;
        console.log(update_query);
        connection.query(update_query, (error, result) => {
          if (error) {
            reject(error);
          } else {
            // const res_result = JSON.parse(JSON.stringify(result));
            const resp ={
              res_result:JSON.parse(JSON.stringify(result)),
              message: `user update at id: ${id}`
            }
            resolve(resp);
          }
        });
      });
}

module.exports = udpate_user_logic;
