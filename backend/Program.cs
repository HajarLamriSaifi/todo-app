var builder = WebApplication.CreateBuilder(args);

// Voeg CORS-services toe
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.WithOrigins("http://localhost:4200")  // Sta de frontend-toegang toe vanaf localhost:4200
              .AllowAnyMethod()  // Sta elke HTTP-methode toe
              .AllowAnyHeader(); // Sta elk header toe
    });
});

// Voeg de controllers toe
builder.Services.AddControllers();

var app = builder.Build();

// Gebruik CORS in de applicatie
app.UseCors("AllowAll");  // Zorg ervoor dat CORS wordt toegepast

// Configureer de HTTP-aanvraagpipeline
app.UseHttpsRedirection();

app.MapControllers(); // Dit zorgt ervoor dat de controller wordt geïnitialiseerd

app.Run();
