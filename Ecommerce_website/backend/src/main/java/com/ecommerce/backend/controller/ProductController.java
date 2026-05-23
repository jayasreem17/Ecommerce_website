package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/products")
public class ProductController {

    @GetMapping
    public List<Product> getProducts() {

        List<Product> products = new ArrayList<>();

        products.add(new Product(
                1L,
                "Nike Shoes",
                2999.0,
                "Running shoes for sports and gym",
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        ));

        products.add(new Product(
                2L,
                "Smart Watch",
                1999.0,
                "Fitness smart watch with heart tracking",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        ));

        products.add(new Product(
                3L,
                "iPhone",
                79999.0,
                "Apple smartphone with powerful camera",
                "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        ));

        products.add(new Product(
                4L,
                "Gaming Laptop",
                55999.0,
                "High performance gaming laptop",
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        ));

        products.add(new Product(
                5L,
                "Wireless Headphones",
                1499.0,
                "Noise cancelling bluetooth headphones",
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        ));

        products.add(new Product(
                6L,
                "DSLR Camera",
                45999.0,
                "Professional DSLR camera for photography",
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
        ));

        products.add(new Product(
                7L,
                "Travel Backpack",
                999.0,
                "Large waterproof travel backpack",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        ));

        products.add(new Product(
                8L,
                "Mechanical Keyboard",
                2499.0,
                "RGB gaming mechanical keyboard",
                "https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
        ));

        products.add(new Product(
                9L,
                "Gaming Mouse",
                799.0,
                "High speed RGB gaming mouse",
                "https://images.unsplash.com/photo-1527814050087-3793815479db"
        ));

        products.add(new Product(
                10L,
                "Android Tablet",
                24999.0,
                "10 inch android tablet for entertainment",
                "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
        ));

        products.add(new Product(
                11L,
                "Bluetooth Speaker",
                1799.0,
                "Portable bluetooth speaker with bass",
                "https://images.unsplash.com/photo-1507878866276-a947ef722fee"
        ));

        products.add(new Product(
                12L,
                "Office Chair",
                6999.0,
                "Comfortable office chair for work setup",
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        ));

        return products;
    }
}