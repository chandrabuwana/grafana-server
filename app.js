const fs =require('fs')
const axios = require('axios')
class PersonParser{
  constructor(file) {
    this._file = file
    this._people = []

  }

  get people() {
    return this._people
  }

  addPerson(dataBaru) {
    this._people.push(dataBaru)
  }

  Readfile(){
    let data = fs.readFileSync('./malena_20190214.csv','utf-8').split("\n");
      for (var i = 1; i < data.length; i++) {
        let pisah = data[i].split(",")
        // let dataHasSplit =''
        let dataHasSplit = (`201902${pisah[0]}${pisah[1]}00,${pisah[2]},${pisah[3]},${pisah[4]},${pisah[5]},${pisah[6]},${pisah[7]},${pisah[8]}`)
        // console.log(dataHasSplit)
        // curl -i -XPOST 'http://localhost:8086/write?db=diis' 
        // -d
        // 'uangTeman,uniq='$i',errorcode="'${line[2]}'",errorcode_malena="'${line[3]}'",errorcode_partner="'${line[4]}'",sms="'${line[5]}'" result="'${line[6]}'",subs='${line[7]}',count='${line[8]}' '${curDate}''
        // axios.post({
        //   url:'http://localhost:8086/write?db=diis',
        //   data:{}
        // })
        var request = require('request');

        var dataString = `uangTeman,uniq=$i,errorcode="${line[2]}",errorcode_malena="${line[3]}",errorcode_partner="${line[4]}",sms="${line[5]}" result="${line[6]}",subs=${line[7]},count=${line[8]} ${curDate}`;

        var options = {
            url: 'http://localhost:8086/write?db=diis',
            method: 'POST',
            body: dataString
        };

        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }
        }

        request(options, callback);

      }
  }
  postData(){
    // console.log(this.pisah[1])
  }
}
let parser = new PersonParser('./malena_20190214.csv')
parser.Readfile()