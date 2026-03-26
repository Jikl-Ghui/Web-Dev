from models import Vehicle, Car, Motorcycle

def main():
    random_vehicle = Vehicle("Ford", "Tractor", 1990)
    sedan = Car("Toyota", "Camry", 2023, 4)
    sportbike = Motorcycle("Yamaha", "R1", 2024, False)

    showroom = [random_vehicle, sedan, sportbike]

    print(f"We just bought a {sedan}!")
    
    print(f"Car honk: {sedan.honk()}")
    
    print(f"Motorcycle trick: {sportbike.pop_wheel()}")
    print(sportbike.start_engine())
    print(f"Motorcycle trick: {sportbike.pop_wheel()}")
    print("-" * 40)

    for vehicle in showroom:
        print(vehicle.get_description())

if __name__ == "__main__":
    main()