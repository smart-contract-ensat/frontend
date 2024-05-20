import { MP } from "./MP";




export interface CommandeMp {
    chargement_de_mp:boolean;
    codeCommandeMp:string;
    createdDate:string;
    en_livraison:boolean;
    fin:boolean;
    id:number;
    id_fourniseur:number;
    id_producteur:number;
    lastModifiedDate:string;
    mps:MP[]
    pourcentage:number;
    preparation_du_commande:boolean;
    quntity:number;
    reception:boolean;
    repartition_logistique:boolean;
    specifications:string;
    valide:boolean;

}