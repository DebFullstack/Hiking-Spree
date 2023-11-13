const getUsers = 'SELECT * FROM "user"';

const getUserById = 'SELECT * FROM "user" WHERE user_id = $1';

const createUser = `
  INSERT INTO "user" (
    username, 
    email, 
    password_hash, 
    first_name, 
    last_name, 
    profile_pic, 
    unique_parks_visited
  ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
`;

const deleteUserById = 'DELETE FROM "user" WHERE user_id = $1 RETURNING *;';

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
};