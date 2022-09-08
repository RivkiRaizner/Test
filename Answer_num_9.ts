//*1
//query return pdf files that are located directly under folder with id 1234
const q1 = `mimeType contains '.pdf' and in parents has id ='1234'`

//*2
//query return mp3 files that are shared with the current user
const q2 = `mimeType contains '.mp3' and sharedWithMe`;

//*3
//query return The file name contains the string important
const q3 = `name contains 'important'`

//////////The final query is:
 const q =` ${q1} or ${q2} or ${q3} `;


