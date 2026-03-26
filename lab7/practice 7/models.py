
class Vehicle:
    def __init__(self, brand, model, year):
        if not isinstance(year, int):
            raise TypeError(f"Year must be an integer, got {type(year).__name__} instead.")
        
        self.brand = brand
        self.model = model
        self.year = year
        self.is_running = False
        self.vehicle_type = "Vehicle"

    def start_engine(self):
        self.is_running = True
        return f"The engine of the {self.year} {self.brand} is now purring."

    def get_description(self):
        return f"A generic vehicle: {self.year} {self.brand} {self.model}."

    def to_dict(self):
        return {
            "vehicle_type": self.vehicle_type,
            "brand": self.brand,
            "model": self.model,
            "year": self.year,
            "is_running": self.is_running
        }

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)
        self.num_doors = num_doors
        self.vehicle_type = "Car"

    def honk(self):
        return "Beep beep!"

    def get_description(self):
        return f"A passenger car: {self.year} {self.brand} {self.model} with {self.num_doors} doors."

    def to_dict(self):
        data = super().to_dict()
        data["num_doors"] = self.num_doors
        return data


class Motorcycle(Vehicle):   
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar
        self.vehicle_type = "Motorcycle"

    def pop_wheel(self):
        if self.is_running:
            return "Vroom! Popping a wheel!"
        return "You need to start the engine first to pop a wheel!"

    def get_description(self):
        sidecar_status = "with" if self.has_sidecar else "without"
        return f"A motorcycle: {self.year} {self.brand} {self.model} {sidecar_status} a sidecar."

    def to_dict(self):
        data = super().to_dict()
        data["has_sidecar"] = self.has_sidecar
        return data