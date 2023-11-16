const pool = require('../../db');
const participantQueries = require('./participantQueries');

const getParticipants = async (req, res) => {
		pool.query(participantQueries.getParticipants, (error, results) => {
			if (error) throw error;
			res.status(200).json(results.rows);
		})
};

const getParticipantById = async (req, res) => {
	const participantId = req.params.participantId;

	pool.query(participantQueries.getParticipantById, [participantId], (error, results) => {
		if(error) {
			console.error(error);
			return res.status(500).json({ error:'Internal Server Error' });
		}

		if (results.rows.length === 0) {
			return res.status(404).json({ error: "participant not found" });
		}
		res.status(200).json(results.rows[0]);
	});
};

const createParticipant = async (req, res) => {
	const {
		visit_id,
		participant_type,
		participant_name,
		tagged_user_id	  
	} = req.body;
  
	const values = [
		visit_id,
		participant_type,
		participant_name,
		tagged_user_id	
	];
  
	pool.query(participantQueries.createParticipant, values, (error, results) => {
	  if (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal Server Error' });
	  }
  
	  res.status(201).json(results.rows[0]);
	});
  };
  
  const deleteParticipantById = async (req, res) => {
	const userId = req.params.userId;
  
	pool.query(participantQueries.deleteParticipantById, [participantId], (error, results) => {
	  if (error) {
		console.error(error);
		return res.status(500).json({ error: 'Internal Server Error' });
	  }
  
	  if (results.rows.length === 0) {
		return res.status(404).json({ error: 'Participant not found' });
	  }
  
	  res.status(200).json({ message: 'Participant deleted successfully' });
	});
  };

  module.exports = {
	getParticipants,
	getParticipantById,
	createParticipant,
	deleteParticipantById
  };