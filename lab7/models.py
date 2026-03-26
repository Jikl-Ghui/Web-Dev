class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.is_running = False

    def start_engine(self):
        self.is_running = True
        return f"The engine of the {self.year} {self.brand} is now purring."

    def get_description(self):
        return f"A generic vehicle: {self.year} {self.brand} {self.model}."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):  
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)
        self.num_doors = num_doors

    def honk(self):
        return "Beep beep!"

    def get_description(self):
        return f"A passenger car: {self.year} {self.brand} {self.model} with {self.num_doors} doors."


class Motorcycle(Vehicle):  
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def pop_wheel(self):
        if self.is_running:
            return "Vroom! Popping a wheel!"
        return "You need to start the engine first to pop a wheel!"

    def get_description(self):
        sidecar_status = "with" if self.has_sidecar else "without"
        return f"A motorcycle: {self.year} {self.brand} {self.model} {sidecar_status} a sidecar."