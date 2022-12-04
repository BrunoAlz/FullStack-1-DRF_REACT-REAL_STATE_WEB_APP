def apply_filters(queryset, **kwargs):
    price = kwargs["price"]
    if price == "$0+":
        price = 0
    elif price == "$50,000+":
        price = 50000
    elif price == "$100,000+":
        price = 100000
    elif price == "$200,000+":
        price = 200000
    elif price == "$400,000+":
        price = 400000
    elif price == "$600,000+":
        price = 600000
    elif price == "Any":
        price = -1

    if price != -1:
        queryset = queryset.filter(price__gte=price)

    bedrooms = kwargs["bedrooms"]
    if bedrooms == "0+":
        bedrooms = 0
    elif bedrooms == "1+":
        bedrooms = 1
    elif bedrooms == "2+":
        bedrooms = 2
    elif bedrooms == "3+":
        bedrooms = 3
    elif bedrooms == "4+":
        bedrooms = 4
    elif bedrooms == "5+":
        bedrooms = 5

    queryset = queryset.filter(bedrooms__gte=bedrooms)

    bathrooms = kwargs["bathrooms"]
    if bathrooms == "0+":
        bathrooms = 0.0
    elif bathrooms == "1+":
        bathrooms = 1.0
    elif bathrooms == "2+":
        bathrooms = 2.0
    elif bathrooms == "3+":
        bathrooms = 3.0
    elif bathrooms == "4+":
        bathrooms = 4.0

    queryset = queryset.filter(bathrooms__gte=bathrooms)
    return queryset
