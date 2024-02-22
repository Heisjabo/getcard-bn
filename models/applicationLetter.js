import mongoose from "mongoose";

const letterSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    responderNames: {
        type: String,
        required: false
    },
    responderAddress: {
        type: String,
        required: false
    },
    graduationField: {
        type: String,
        required: false
    },
    applicationFor: {
        type: String,
        required: false
    }
});

const Application = mongoose.model('Application', letterSchema);

export default Application;