const getParticipants = 'SELECT * FROM participant';

const getParticipantById = 'SELECT * FROM participant WHERE participant_id = $1';

const createParticipant = `
  INSERT INTO participant (
	visit_id,
    participant_type,
    participant_name,
    tagged_user_id
  ) VALUES ($1, $2, $3, $4) RETURNING *;
  `;

  const deleteuserById = 'DELETE FROM participant WHERE participant_id = $1 RETURNING *;';

  module.exports = {
	getParticipants,
	getParticipantById,
	createParticipant,
	deleteuserById
  }