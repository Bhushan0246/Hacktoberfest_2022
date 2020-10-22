fun main () {

    val vehicle = mapOf(
            "type" to "Motorcycle",
            "maxSpeed" to "230Km/s",
            "maxTank" to "10Ltr"
    )

    val type = vehicle["type"]
    val maxSpeed = vehicle["maxSpeed"]
    val maxTank = vehicle["maxTank"]

    println("""
            Vehicle
            Type: $type
            Maximal Speed: $maxSpeed
            Maximal Tank: $maxTank
        """.trimIndent())
}