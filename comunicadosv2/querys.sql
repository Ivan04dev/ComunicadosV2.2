-- Obtiene las regiones por división
SELECT DISTINCT  REGION FROM atc_sucursal WHERE DIVISION = 'Metro' ORDER BY REGION ASC:

-- Esta es la chida
-- Obtiene las ciudades por región
SELECT DISTINCT  CIUDAD FROM atc_sucursal WHERE REGION = 'Metro Norte' ORDER BY CIUDAD ASC;

-- Esta no
SELECT DISTINCT  SUCURSAL FROM atc_sucursal WHERE REGION = 'Metro Norte' ORDER BY SUCURSAL ASC;

-- Obtiene las sucursales por ciudad
SELECT SUCURSAL FROM atc_sucursal WHERE CIUDAD = 'Cuernavaca' ORDER BY SUCURSAL ASC;

-- Obtiene las sucursales por región
SELECT  SUCURSAL FROM atc_sucursal WHERE REGION = 'Metro Norte' ORDER BY SUCURSAL ASC;