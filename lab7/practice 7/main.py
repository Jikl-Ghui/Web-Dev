import json
from models import Vehicle, Car, Motorcycle
DATA_FILE = "data.json"

def save_data(vehicles, filename):
    print(f"\n ATTEMPTING TO SAVE DATA TO {filename} ")
    
    data_to_save = [vehicle.to_dict() for vehicle in vehicles]
    
    try:
        with open(filename, 'w') as file:
            json.dump(data_to_save, file, indent=4)
        print("Success: Data saved successfully.")
        
    except PermissionError:
        print("Error: You do not have permission to write to this file.")
    except Exception as e:
        print(f"An unexpected error occurred during saving: {e}")
    finally:
        print("Save operation sequence finished.")

def load_data(filename):
    print(f"\n LOADING DATA FROM {filename} ")
    loaded_vehicles = []
    
    try:
        with open(filename, 'r') as file:
            data_loaded = json.load(file)
            
        for item in data_loaded:
            if item["vehicle_type"] == "Car":
                obj = Car(item["brand"], item["model"], item["year"], item["num_doors"])
            elif item["vehicle_type"] == "Motorcycle":
                obj = Motorcycle(item["brand"], item["model"], item["year"], item["has_sidecar"])
            else:
                obj = Vehicle(item["brand"], item["model"], item["year"])
            
            obj.is_running = item["is_running"]
            loaded_vehicles.append(obj)
            
        print("Success: Data loaded")
        
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found. Starting with an empty showroom.")
    except json.JSONDecodeError:
        print("Error: The file contains invalid JSON data.")
    finally:
        print("Load operation sequence finished.")
        
    return loaded_vehicles

def main():
    print(" TESTING TYPEERROR ")
    try:
        test_vehicle = Vehicle("Ford", "Focus", "Two Thousand")
    except TypeError as e:
        print(f"Caught an error: {e}")

    generic_vehicle = Vehicle("Ford", "Tractor", 1990)
    sedan = Car("Toyota", "Camry", 2023, 4)
    sportbike = Motorcycle("Yamaha", "R1", 2024, False)
    sportbike.start_engine() 

    showroom = [generic_vehicle, sedan, sportbike]

    save_data(showroom, DATA_FILE)

    restored_showroom = load_data(DATA_FILE)
    
    print("\n LOADING AFTER SAVING ")
    for vehicle in restored_showroom:
        print(vehicle.get_description())
        print(f"  -> Is it running? {vehicle.is_running}")

if __name__ == "__main__":
    main()