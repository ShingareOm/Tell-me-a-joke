const changeJoke = () => {
    let mr_jokes = [
        `बंता - अरे संता, तू तुझे लग्न का मोडलेस...?
<br>    संता - अरे तिचा कोणी बॉयफ्रेंड नव्हता...
<br>    बंता - अरे मग चांगले होते कि...?
<br>    संता - काय चांगले...?
जी आजपर्यंत कोणाचीच झाली नाही...<br>
ती माझी काय होणार...!!!
<br>😂😂😂😂😂😂
`,
        `संता - घ्या... लाईट गेली...
<br>    बंता - लाईट गेली तर काय झालं...?
खूप गरम होतंय राव. पंखा तर चालू कर...?
<br>    संता - तू परत मूर्खासारख बोललास!
पंखा लावला तर मेणबत्ती विझणार नाही का...!
<br>😂😂😂😂😂😂
`,
        `संता - काय करतोस...
<br>    बंता - IPL बघतोय...
<br>    संता - मी नाही बघत ते IPL...
<br>    बंता - पण का...?
<br>    संता - त्याच्यात INDIA नेहमीच हरते...!
<br>    बंता - फोन ठेव आणि छोटा भीम लाव...!!!
<br>😂😂😂😂😂😂
`,
        `संताच्या आजोबाचे निधन होते...<br>
त्यांची अंतिमयात्रा चाललेली असते.
<br>        बंता - काय झाले...?
मरण पावले कि काय...?
<br>    संता - नाही... नाही...<br>
त्यांना घरात करमत नव्हते...<br>
त्यामुळे बाहेर थोडसं फिरवून आणतो...<br>
नॉनसेन्स कुठला...!!!
<br>😂😂😂😂😂😂
`, `हे, वाचा : भरपूर हसवणारे मराठी जोक्स
<br>    संता - बंता जंगलात गेले होते...
<br>    समोरून अचानक वाघ आला...
<br>    संतानं प्रसंगावधान राखून गुरकावणाऱ्या वाघाच्या डोळ्यांत चपळाईनं
माती फेकली
आणि
तो बंताला म्हणाला, ”पळ पळ बंता!”
<br>    बंता हसत उत्तरला,
”मी का पळू? माती तू फेकलीयेस त्याच्या डोळ्यांत!!!!”
<br>😂😂😂😂😂😂
`,
        `संताची आई - अरे बाळा, लवकर घरी ये...<br>
सुनबाईला अटॅक आला आहे वाटत...<br>
तिच तोंड वाकड, डोळे वर आणि मान वाकडी झालीय...
<br>    संता - आई तू घाबरू नकोस,
ती सेल्फी काढत असेल...<br>
😂😂😂😂😂😂
`,
        `गर्दीत चालता चालता संताचा धक्का एका मुलीला लागतो...
<br>    संता - ओह Sorry...
<br>    मुलगी (रागाने) - डोळे फुटलेत का...?
<br>    संता मग घाबरून थोडेसे लांब होतो...
<br>    तेवढ्यात एका देखण्या तरुणाचा त्या मुलीला धक्का लागतो...<br>
तो मुलगा Sorry म्हणतो...
<br>    मुलगी (लाजत) - इट्स ओके....
<br>    संता - बहुतेक माझ्या Sorry चं स्पेलिंग चुकलं असेल...<br>
😂😂😂😂😂😂
`,
        `संता, बंता आणि गुरमीत तिघे स्कूटरवरून सुसाट वेगाने चाललेत.
<br>    अचानक ट्रॅफिक पोलिसाची नजर त्यांच्यावर पडते.
तो वैतागून शिट्टी वाजवतो.
<br>    बंता त्याला सांगतो. अरे वेडा आहेस काय...?
<br>    आधीच तिघे बसलोत. त्यात तुला कुठे बसवणार?
<br>😂😂😂😂😂😂
`,
        `मुलगी लाडात येऊन - तू जहा-जहा चलेगा,
मेरा साया साठ होगा,,,
<br>    संता - मला तरी शंका  आलीच होती,
कि
तू भूत आहेस ते...!!!
<br>😂😂😂😂😂😂
`,
        `संता खूप मोठमोठ्याने रडत असतो...
<br>    बंता - काय झालं...? का रडत आहेस...?
<br>    संता - अरे काय करू???
ज्या मुलीला विसरायचा प्रयत्न करतोय,
तिच नावच आठवत नाहीये...!!!
<br>😂😂😂😂😂😂
`,
        `एकदा संता बंताला स्वत:च्या घरी बोलावतो,
<br>    जेव्हा संता बंताच्या घरी जातो तेव्हा ,
बंताच्या घराला टाळे लावलेले असते
आणि
तिथे लिहुन ठेवलेले असते”
<br>    तुझा पोपट झालाय , चल फूट इथून ”
<br>    संता खाली पड्लेला खडु उचलतो
आणि
लिहितो
<br>    "मी आलोच नव्हतो "...<br>
😂😂😂😂😂😂
`,

        `बंता एका सुंदर मुलीला विचारतो,
तुम्ही कुठे राहता...?
<br>    मुलगी - एम.जी. रोड
<br>    बंता - एवढ्या सुंदर असूनही तुम्ही रस्त्यावर राहता...!!!
<br>😂😂😂😂😂😂
`,

        `संता त्याच्या गर्लफ्रेंडला...
<br>    संता - मला तुझे दात खूपच आवडतात...
<br>    गर्लफ्रेंड - अय्या... खरच. का रे...?
<br>    संता - कारण पिवळा हा माझा आवडता कलर आहे...<br>
😂😂😂😂😂😂
`]


    document.getElementById("jokediv").innerHTML = mr_jokes[Math.floor(Math.random() * mr_jokes.length - 1) + 1]
}

