namespace tiendas_mascotas_aspnet.Entities
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }   
        public string NombreDeUsuario { get; set; }
    }
}
