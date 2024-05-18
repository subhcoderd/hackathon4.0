const mysql = require('mysql');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'project'
});

conn.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to database');
  
  rl.question('Enter your first name: ', (firstName) => {
    rl.question('Enter your last name: ', (lastName) => {
      rl.question('Enter your date of birth: ', (dob) => {
        rl.question('Enter your full address: ', (address) => {
          rl.question('Enter your password: ', (password) => {
            rl.question('Confirm your password: ', (confirmPassword) => {
              if (password !== confirmPassword) {
                console.log('Passwords do not match');
                rl.close();
                conn.end();
              } else {
                const sql = `INSERT INTO user_info VALUES ('${firstName}', '${lastName}', ${dob}, '${address}', '${password}')`;
                conn.query(sql, (err, result) => {
                  if (err) {
                    console.error('Error executing query: ' + err.stack);
                  } else {
                    console.log('Sign up successful');
                  }
                  rl.close();
                  conn.end();
                });
              }
            });
          });
        });
      });
    });
  });
});
