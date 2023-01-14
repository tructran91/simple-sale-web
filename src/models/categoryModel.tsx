import { ContentModel } from "./contentModel";

export interface CategoryModel extends ContentModel {
    id: string;
    displayName: string;
    parentId: string;
    includeInMenu: boolean;
    displayOrder: number;
}