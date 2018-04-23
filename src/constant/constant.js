let sendNotification = 		
{
    "sendNotification":{
        "templateId": "5ad5e666793b9d200c9aeaf7",
        "accessKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZDQ5ODNlY2ZiNzYyMmM2MDVjOWI0YSIsInVzZXJuYW1lIjoibW90aWxhbC5vc3dhbEB0cmFkaW5nLmNvbSIsInRlbmFudElkIjoiNWFkNDk4M2VjZmI3NjIyYzYwNWM5YjRiIiwiaWF0IjoxNTIzODgyMDQ2fQ.PvyGrt74Hwo8g5NgLsHacGX1j_A0NIIP8qdhCJYCA7o",
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
                "toEmailAddress": "rahul.gourshettiwar@globant.com",
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
        }
    }
}

let pullNotification =
{ 
    headers: {
        "accessKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZDQ5ODNlY2ZiNzYyMmM2MDVjOWI0YSIsInVzZXJuYW1lIjoibW90aWxhbC5vc3dhbEB0cmFkaW5nLmNvbSIsInRlbmFudElkIjoiNWFkNDk4M2VjZmI3NjIyYzYwNWM5YjRiIiwiaWF0IjoxNTIzODgyMDQ2fQ.PvyGrt74Hwo8g5NgLsHacGX1j_A0NIIP8qdhCJYCA7o"
    }
};
export default {sendNotification,pullNotification};