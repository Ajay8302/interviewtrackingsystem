//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace interview.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class interviewtrackingEntities6 : DbContext
    {
        public interviewtrackingEntities6()
            : base("name=interviewtrackingEntities6")
        {
          this.Configuration.LazyLoadingEnabled = false;
          this.Configuration.ProxyCreationEnabled = false;
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<c_add_admin> c_add_admin { get; set; }
        public virtual DbSet<schedule1> schedule1 { get; set; }
        public virtual DbSet<techpannel> techpannels { get; set; }
    }
}