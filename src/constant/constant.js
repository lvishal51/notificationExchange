let sendNotification = 		
{
    "sendNotification":{
        "templateId": "5ae16a871a95a21270e9372a",
        "accessKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTA1Y2Y4Y2ZjMGM4MTk1NDVjNzUwNyIsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IjVhZTA1Y2Y4Y2ZjMGM4MTk1NDVjNzUwOCIsImlhdCI6MTUyNDY1MzMwNH0.8vWkd-pV6o6_RE4HnAGfduoOlDHK8dkHO2q981nW2hY",
        "smsNotification": {
            "header":{
                "toNumber": "9766810811"
            },			
            "body": {
                "stockName": "",
                "quantity": "",
                "stockPrice": "",
                "exchangeName": "BSE",
                "accountNumber": "E8XXX933",
                "transactionDate": "12-APR-2018"
            }
        },
        "emailNotification": {
            "header":{
                "fromEmailAddress": "motilal.oswal@trading.com",
                "toEmailAddress": "vishal.lohakare@globant.com",
                "subject": {
                    "accountNumber": "E9XXX767"
                }
            },
            "body":{
                "stockName": "",
                "quantity": "",
                "stockPrice": "",
                "exchangeName": "BSE",
                "accountNumber": "E9XXX767",
                "transactionDate": "11-APR-2018"
            }
        },
        "webTemplate": {
            "message" : ""
        }
    }
}

let pullNotification =
{ 
    headers: {
        "accessKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZTA1Y2Y4Y2ZjMGM4MTk1NDVjNzUwNyIsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IjVhZTA1Y2Y4Y2ZjMGM4MTk1NDVjNzUwOCIsImlhdCI6MTUyNDY1MzMwNH0.8vWkd-pV6o6_RE4HnAGfduoOlDHK8dkHO2q981nW2hY"
    }
};
export default {sendNotification,pullNotification};