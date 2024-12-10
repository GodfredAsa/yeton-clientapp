export interface Stock {
  itemId: string;              // Unique identifier for the item
  itemName: string;            // Name of the item
  category: string ;     // Category of the item (can be null)
  brand: string;               // Brand of the item
  condition: 'NEW' | 'SLIGHTLY USED';   // Condition of the item (can be NEW or USED)
  model: string;               // Model of the item
  stock: number;               // Number of items in stock
  image: string;               // Image URL or path for the item
  hasVendor: boolean;          // Indicates if there is a vendor associated with the item
  price: number;               // Selling price of the item
  cost: number;                // Cost price of the item
  hasGallery: boolean;         // Indicates if the item has a gallery of images
  profit: number;              // Profit margin on the item
  forSale: boolean;            // Indicates if the item is for sale
  createdAt: string;           // Timestamp when the item was created
  updatedAt: string | null;    // Timestamp when the item was last updated (can be null)
}
