export interface Order {
    ordId: string;
    orDetails: Item [];
    date: string;
    status: string;
    total: number;
}

export interface Item {
    itKey: string;
    itName: string;
    itNameAr: string;
    itPrice: number;
    qtyAv: number;
    picUrl: string;
    itCateg: string;
    calories: number ;
    nbrPerson: number ;
}

export interface UserProfile {
    key: string;
    name: string;
    phone: number;
    mail: string;
    orders: Order[];
    isAdmin: boolean;
    password: string;

}