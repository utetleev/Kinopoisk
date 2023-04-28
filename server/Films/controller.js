const Film = require ('./Film')
const createFilm = (req , res) => {
    // проверка
    // console.log("req.file===", req.file)
    // console.log("req.titleRus===", req.body.titleRus)
    // console.log("req.titleEng===", req.body.titleEng)
    // console.log("req.year===", req.body.year)
    // console.log("req.time===", req.body.time)
    // console.log("req.country===", req.body.country)

    // console.log("req.genre===", req.body.genre)

   if (req.file && 
    req.body.titleRus.length > 2 && 
    req.body.titleEng.length > 2 &&
    req.body.year > 0 &&
    req.body.time > 10 &&
    req.body.country.length > 2 &&
    req.body.genre.length > 2)
    {
        new Film({
            titleRus: req.body.titleRus,
            titleEng: req.body.titleEng,
            year: req.body.year,
            time: req.body.time,
            country: req.body.country,
            genre: req.body.genre,
            image: `${req.file.destination}/${req.file.filename}` ,
            author: req.user._id
        }).save()
        res.redirect(`/admin/${req.user._id}`)
   }else{
        res.redirect('/new?error=1')
   }
}
module.exports = {
    createFilm
}