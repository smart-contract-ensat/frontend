import { Product } from "./product";





export interface CommandeProduct {

    id?:number;
    id_client?:number;
    id_producteur?:number;
    acquisitionMp?:boolean;
    assemblageProduit?:boolean;
    codeCommandeProduct?:boolean;
    createdDate?:string;
    eballageEtiquetageProduit?:boolean;
    fin?:boolean;
    pourcentage:number;
    lastModifiedDate?:string;
    products?:Product[];
    quntity?:number
    specifications?:string;
    stockageDistributionProduit?:boolean;
    transformationMp?:boolean;
    valide?:boolean;
 

  }