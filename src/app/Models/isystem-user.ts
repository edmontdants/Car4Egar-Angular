export interface ISystemUser {
  NID: string;    //f1
  UserName: string; //f1
  Password: string; //f3
  Email: string;  //f1 //f3
  Role: string;
  IsActivated: boolean;
  Address: string;  //f1
  PhoneNumber: string;  //f1
  Gender: string;   //f1
  BirthDate: string; //f1
  Bank_CardNumber: string;
  Bank_ExpireDate: string;
  Bank_CSC: string;
  Photo: string;  //f1
  Balance: number;
  Fine: number;
  Rate: number;
  RatedPeople: number;
}
