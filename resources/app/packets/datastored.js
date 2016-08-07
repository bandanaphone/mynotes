module.exports = new Dexie('Notes');
module.exports.version(1).stores({entries:'++id, title, entry' });
module.exports.open().catch(function(err){alert("Could not open database:"+err)});