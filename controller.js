const { response } = require("./app");

const Feedback = require('./model');


//get all the feedbacks
const getFeedback = (req, res, next) => {
    Feedback.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
};


//add feedback
const addFeedback = (req, res, next) => {
    const feedback = new Feedback({
        id: req.body.id,
        name: req.body.name,
        email:req.body.email,
        feedback:req.body.feedback,
    });
    feedback.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

//update feedback
const updateFeedback = (req, res, next) => {
    const { id, name, email, feedback } = req.body;
    Feedback.updateOne({ id: id }, { $set: { name: name , email:email , feedback:feedback }} )
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}

//delete feedback
const deleteFeedback = (req, res, next) => {
    const { id } = req.body;
    Feedback.deleteOne({ id: id })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ error })
        });
}


exports.getFeedback = getFeedback;
exports.addFeedback = addFeedback;
exports.updateFeedback = updateFeedback;
exports.deleteFeedback = deleteFeedback;