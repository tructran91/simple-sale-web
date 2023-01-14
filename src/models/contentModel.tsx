import { SEOModel } from "./seoModel";

export interface ContentModel extends SEOModel {
    name: string;
    slug: string;
    description: string;
    isPublished: boolean;
}