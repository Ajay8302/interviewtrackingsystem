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
    using System.Collections.Generic;
    
    public partial class techpannel
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public techpannel()
        {
            this.schedule1 = new HashSet<schedule1>();
        }
    
        public int Interview_Id { get; set; }
        public Nullable<int> Candidate_id { get; set; }
        public Nullable<int> Techrating { get; set; }
        public Nullable<System.DateTime> techIS { get; set; }
    
        public virtual c_add_admin c_add_admin { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<schedule1> schedule1 { get; set; }
    }
}