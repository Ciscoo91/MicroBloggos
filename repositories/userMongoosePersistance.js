const Member = require("../model/memberSchema");

function updateUser(userId, updateData) {
    return Member.findByIdAndUpdate(userId, updateData, { new: true }).exec();
}

function createMember(memberData) {
  const newMember = new Member(memberData);
  return newMember.save();
}

function deleteMember(memberId) {
  return Member.findByIdAndDelete(memberId).exec();
}

function getMemberById(memberId) {
  return Member.findById(memberId).exec();
}

function getAllMembers() {
  return Member.find({}).exec();
}

function getMemberById(memberId) {
  return Member.findById(memberId).exec();
}


module.exports = {
    updateUser,
    createMember,
    deleteMember,
    getMemberById,
    getAllMembers,
    getMemberById
};
